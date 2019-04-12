import numpy as np
import matplotlib as p
import pdb
from pandas import *

data = read_csv('train.csv')
print(data)

men = data[data.Sex == 'male']
women = data[data.Sex == 'female']

proportion_women_survived = float(sum(women.Survived))/len(women)
proportion_men_survived = float(sum(men.Survived))/len(men)
print(data.groupby('Sex').Survived.mean())


