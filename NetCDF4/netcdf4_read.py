# from netCDF4 import Dataset
import xarray
import cartopy.crs as ccrs
from datetime import datetime
import imageio
import os
from scipy.io import netcdf
import numpy as np
import matplotlib
import matplotlib.pyplot as plt

import netCDF4 as nc
fn = r"C:\Users\Israel\Desktop\INST 490\share\share\map data\abi_nc\OR_ABI-L1b-RadF-M6C13_G16_s20210850900178_e20210850909497_c20210850909557.nc"
ds = nc.Dataset(fn)

my_example_nc_file = r"C:\Users\Israel\Desktop\INST 490\share\share\map data\abi_nc\OR_ABI-L1b-RadF-M6C13_G16_s20210850900178_e20210850909497_c20210850909557.nc"
fh = nc.Dataset(my_example_nc_file, mode='r')


# -*- coding: utf-8 -*-
"""
Created on Thu Apr 29 10:11:49 2021

@author: NoahSienkiewicz
"""


def lat_lon_reproj(fname, varName="none"):
    g16nc = nc.Dataset(fname)
    var_names = [ii for ii in g16nc.variables]

    if varName == "none":
        var_name = var_names[0]
    else:
        var_name = varName

    try:
        band_id = g16nc.variables['band_id'][:]
        band_id = ' (Band: {},'.format(band_id[0])
        band_wavelength = g16nc.variables['band_wavelength']
        band_wavelength_units = band_wavelength.units
        band_wavelength_units = '{})'.format(band_wavelength_units)
        band_wavelength = ' {0:.2f} '.format(band_wavelength[:][0])
        print('Band ID: {}'.format(band_id))
        print('Band Wavelength: {} {}'.format(
            band_wavelength, band_wavelength_units))
    except:
        band_id = ''
        band_wavelength = ''
        band_wavelength_units = ''

    # GOES-R projection info and retrieving relevant constants
    proj_info = g16nc.variables['goes_imager_projection']
    lon_origin = proj_info.longitude_of_projection_origin
    H = proj_info.perspective_point_height+proj_info.semi_major_axis
    r_eq = proj_info.semi_major_axis
    r_pol = proj_info.semi_minor_axis

    # grid info
    lat_rad_1d = g16nc.variables['x'][:]
    lon_rad_1d = g16nc.variables['y'][:]

    # data info
    data = g16nc.variables[var_name][:]
    data_units = g16nc.variables[var_name].units
    data_time_grab = ((g16nc.time_coverage_end).replace(
        'T', ' ')).replace('Z', '')
    data_long_name = g16nc.variables[var_name].long_name
    data = data*g16nc.variables[var_name].scale_factor + \
        g16nc.variables[var_name].add_offset

    # create meshgrid filled with radian angles
    lat_rad, lon_rad = np.meshgrid(lat_rad_1d, lon_rad_1d)

    # lat/lon calc routine from satellite radian angle vectors

    lambda_0 = (lon_origin*np.pi)/180.0

    a_var = np.power(np.sin(lat_rad), 2.0) + (np.power(np.cos(lat_rad), 2.0)*(np.power(
        np.cos(lon_rad), 2.0)+(((r_eq*r_eq)/(r_pol*r_pol))*np.power(np.sin(lon_rad), 2.0))))
    b_var = -2.0*H*np.cos(lat_rad)*np.cos(lon_rad)
    c_var = (H**2.0)-(r_eq**2.0)

    r_s = (-1.0*b_var - np.sqrt((b_var**2)-(4.0*a_var*c_var)))/(2.0*a_var)

    s_x = r_s*np.cos(lat_rad)*np.cos(lon_rad)
    s_y = - r_s*np.sin(lat_rad)
    s_z = r_s*np.cos(lat_rad)*np.sin(lon_rad)

    lat = (180.0/np.pi)*(np.arctan(((r_eq*r_eq)/(r_pol*r_pol))
                                   * ((s_z/np.sqrt(((H-s_x)*(H-s_x))+(s_y*s_y))))))
    lon = (lambda_0 - np.arctan(s_y/(H-s_x)))*(180.0/np.pi)

    # close file when finished
    g16nc.close()
    g16nc = None

    return lon, lat, data, data_units, data_time_grab, data_long_name

# %%


out_dir = r"placeholder"  # Copy path to desired output folder here
png_dir = r"placeholder"  # Copy path to directory with saved images here

# Can save figures with plt.savefig() easily


def MP4Maker(out_dir, name, num, fps,
             png_dir=r"tmp/"):  # Note that "png_dir" is  kwarg. Look up how Python handles these
    '''
    Concatenates a list of png images (from 'png_dir') into an animation called
    'name'.mp4 in 'out_dir' with framerate 'fps'. Num is the number of image files
    to use. Only works if the images are named like
        0.png, 1.png, 2.png ... num-1.png
    '''
    images = []  # Prepare image list
    for file_name in range(num):  # Loop through image nums
        file_name = str(file_name)+'.png'  # image filename (0.png...)
        if file_name.endswith('.png'):  # Check fo rjpg files
            # Combine name with directory
            file_path = os.path.join(png_dir+'/', file_name)
            images.append(imageio.imread(file_path))  # Add to list
    imageio.mimsave(out_dir+'/'+name+'.mp4', images,
                    format='mp4', fps=fps)  # Compile list to mp4
    return


# %%

if __name__ == "__main__":

    filename = r"C:\Users\Israel\Desktop\INST 490\share\share\map data\abi_nc\OR_ABI-L1b-RadF-M6C13_G16_s20210850900178_e20210850909497_c20210850909557.nc"  # netCDF filename

    lon, lat, data, data_units, data_time_grab, data_long_name = lat_lon_reproj(
        filename, varName='Rad')
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Apr 29 12:01:54 2021

@author: aputhukkudy
"""
######################################################################
# First, import the libraries we will use
# ---------------------------------------


import metpy  # noqa: F401


######################################################################
# Open the GOES-16 NetCDF File
# ----------------------------

# Open the file with xarray.
# The opened file is assigned to "C" for the CONUS domain.

# FILE = ('http://ramadda-jetstream.unidata.ucar.edu/repository/opendap'
#         '/4ef52e10-a7da-4405-bff4-e48f68bb6ba2/entry.das#fillmismatch')

FILE = (r"C:\Users\Israel\Desktop\INST 490\share\share\map data\abi_nc\OR_ABI-L1b-RadF-M6C13_G16_s20210850900178_e20210850909497_c20210850909557.nc")
C = xarray.open_dataset(FILE)

######################################################################
# Date and Time Information
# ----------------------------
# Each file represents the data collected during one scan sequence for the
# domain. There are several different time stamps in this file, which are also
# found in the file's name.
# I'm not a fan of numpy datetime, so I convert it to a regular datetime

# Scan's start time, converted to datetime object
scan_start = datetime.strptime(C.time_coverage_start, '%Y-%m-%dT%H:%M:%S.%fZ')

# Scan's end time, converted to datetime object
scan_end = datetime.strptime(C.time_coverage_end, '%Y-%m-%dT%H:%M:%S.%fZ')

# File creation time, convert to datetime object
file_created = datetime.strptime(C.date_created, '%Y-%m-%dT%H:%M:%S.%fZ')

# The 't' variable is the scan's midpoint time
midpoint = str(C['t'].data)[:-8]
scan_mid = datetime.strptime(midpoint, '%Y-%m-%dT%H:%M:%S.%f')

print('Scan Start    : {}'.format(scan_start))
print('Scan midpoint : {}'.format(scan_mid))
print('Scan End      : {}'.format(scan_end))
print('File Created  : {}'.format(file_created))
print('Scan Duration : {:.2f} minutes'.format(
    (scan_end-scan_start).seconds/60))


dat = C.metpy.parse_cf('Rad')

geos = dat.metpy.cartopy_crs

# We also need the x (north/south) and y (east/west) axis sweep of the ABI data
x = dat.x
y = dat.y

######################################################################
# The geostationary projection is the easiest way to plot the image on a
# map. Essentially, we are stretching the image across a map with the same
# projection and dimensions as the data.

fig = plt.figure(figsize=(15, 12))

# Create axis with Geostationary projection
ax = fig.add_subplot(1, 1, 1, projection=geos)
# %%
# Add the RGB image to the figure. The data is in the same projection as the
# axis we just created.
ax.imshow(dat, origin='upper',
          extent=(x.min(), x.max(), y.min(), y.max()), transform=geos)  # ccrs.PlateCarree())#geos)

# Add Coastlines and States
ax.coastlines(resolution='50m', color='black', linewidth=0.25)
ax.add_feature(ccrs.cartopy.feature.STATES, linewidth=0.25)

plt.title('GOES-16 ABI', loc='left', fontweight='bold', fontsize=15)
plt.title('{}'.format(scan_start.strftime('%d %B %Y %H:%M UTC ')), loc='right')

plt.show()
