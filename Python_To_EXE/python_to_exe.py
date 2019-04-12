from cx_Freeze import setup,Executable

setup(name="Pandas",
      version ="1.0",
      description = " Pandas example",
      executables = [Executable(r"Python_Pandas_Example.py")]
      )
