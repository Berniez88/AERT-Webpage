# from scipy.io import netcdf
# import numpy as np
# import matplotlib
# import matplotlib.pyplot as plt

# import netCDF4 as nc
# fn = 'C:\\Users\\Bernie\\Documents\\GitHub\\AERT-Webpage\\testing\\OR_ABI-L1b-RadF-M6C13_G16_s20210850900178_e20210850909497_c20210850909557.nc'
# ds = nc.Dataset(fn)
from netCDF4 import Dataset
import numpy as np

my_example_nc_file = 'C:\Users\Bernie\Documents\GitHub\AERT-Webpage\testing\M6C13_G16_s20210850900178_e20210850909497_c20210850909557.nc'
fh = Dataset(my_example_nc_file, mode='r')