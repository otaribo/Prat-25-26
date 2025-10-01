import tkinter as tk
def saludar():
    print("you touched me🔥🔥")

def mostrarEntrada():
    entrada_usuario = entrada.get()
    etiqueta.config(text=entrada_usuario)

root=tk.Tk()
root.title("Primera ventana")
root.
root.geometry("400x200")

etiqueta=tk.Label(root, text="uohhhhh its a window")
etiqueta.pack()

boton=tk.Button(root, text="touch me bby🔥", command=mostrarEntrada)
boton.pack()

entrada = tk.Entry(root)
entrada.pack()

root.mainloop()
