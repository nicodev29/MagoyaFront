Magoya App - Front

Parte frontend de los requisitos tecnicos para Magoya.

Se desarrollo una interfaz grafica con React como se solicito para representar los requerimentos, como creacion de cuentas, balance y de eventos.

Requisitos previos:

* Tener instalado NodeJS.

Para poder utilizar, clonar el repositorio en una carpeta a eleccion, y correr el comando:

"npm install" (se instalaran todas las dependencias necesarias para poder ejecutar sin problemas el frontend)

Luego, ejecutar el comando "npm start" el cual levantara el proyecto en el puerto 3000, asegurarse de tenerlo disponible para evitar conflicos.

Dejo imagenes a continuacion:

![image](https://github.com/nicodev29/MagoyaFront/assets/104247851/fea3c165-b54a-4d89-940e-5b8177c445bb)

Al momento de realizar una transaccion, recibimos un mensaje de confirmacion de la misma, esta se registra en la lista de eventos que se ve debajo.

![image](https://github.com/nicodev29/MagoyaFront/assets/104247851/da64f934-a295-4666-8f37-3f64cd19271d)

Las transacciones de tipo DEPOSITO, cuando son superiores a un monto de 10000, se las diferencia con un background rojo para llamar la atencion a nivel front. A nivel back, el middleware las intercepta. 

![image](https://github.com/nicodev29/MagoyaFront/assets/104247851/117a903f-6441-4add-8880-816f7819927c)
