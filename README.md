# Newproj-react


## Description

Newproj-react is an e-commerce project corresponding to C&C Stores, in which the customer can select different grocery products, such as varieties of coffee, sweets and sandwiches. The selected products can be displayed together with a description of them, their prices and their stocks. 

Once the customer decides to purchase, he can send the selected products to a Cart, where he can view the unit price, quantity and subtotal, as well as the final purchase price. Finally, the customer can complete a form and submit the purchase order. If the stock of a certain product is not enough, an error message appears. 


## Features

Newproj-react was designed using Vite JS, a Frontend build tool very useful for creating a modern web project structure quickly. In this case, Vite JS is used with React, a library of the JavaScript programming language. The NPM Create Vite package is also used, which is responsible for creating the project folder.

Finally, Newproj-react can be seen in the Netlify repository, specially designed to host websites, as well as imported and cloned from Github, a free online repository that allows you to manage projects and control the different versions of the code. 

The menu of rendered products are located in the Firestore database, which is part of the Firebase digital platform.


## Tech Characteristics

Newproj-react is located in a folder called vite-app, which itself is made up of other folders and files. One of the most important is the "components" folder, which roughly consists of the following folders:

### Button folder

A button component that can be exported to other project folders.

### CartView folder

The CartView folder contains a function of the same name that displays the Cart with the products selected by the customer, showing unit prices, quantities, subtotals, and total price. If the customer removes the selected products, a message appears indicating that the Cart is empty. This topic is handled by conditional code.

### CartWidget folder

The CartWidget folder features the code that manages the Cart widget in the navigation bar, along with a bottom number indicating the number of products selected. An early return makes this number disappears when no products have been selected (in other words, the number "0" does not appear).

### CheckoutForm folder

The CheckoutForm folder contains the code for the form that appears on the Cart page. This form must be completed by the customer to prepare the purchase order.

### Item folder

The Item folder contains the code for the tabs of the products represented in the listing on the home page. These cards contain an image of the product, its names, prices and a button that leads to Details. A conditional rendering indicates the possibility of offers.

### ItemCount folder

The ItemCount folder contains the counter code so that the customer can select the quantity of products. The addition or subtraction of products is managed based on the handleAdd and handleSubstract functions, while a useState hook is used to carry out this task and store these quantities. When the quantity of products is zero or reaches the available stock, the subtraction and addition buttons are automatically deactivated, respectively.

### ItemDetailContainer folder

The ItemDetailContainer folder contains the card code that tells the customer which product they have selected, along with its image, price, description, and available stock. From here you can access the Cart through a Link.

### ItemListContainer folder

The ItemListContainer folder contains the code to render the products, both on the homepage and on the page of each product category.

### Loader folder

The Loader folder contains the code that makes it easy to render products.

### NavBar folder

The NavBar folder contains the code corresponding to the navigation bar, with the routes to the different pages through the use of the "Link to" command, the store logo and the Cart.

### OrderConfirm folder

The OrderConfirm folder contains the code that displays the purchase order number of the products purchased by the customer, confirming the transaction. As in other circumstances, since the purchase orders are dynamic, the useParams hook is used. The purchase order number together with its data (date, customer data, products purchased, etc.) are stored in the Firestore database.

### Products folder

The Products folder contains the array of objects with the rendered products, after sending them to the Firestore database. Each object in the array represents a product that contains the following data: an id, category, product, name, description, price, stock, image, and eventually a discount.

Note that each folder contains a file with jsx code and another with complementary css style code. It also presents:

### App folder

The App folder contains the code with the navigation paths to the different pages of the site and the location of the navigation bar.


## Installation

You can install this app in a Visual Studio Code text editor Terminal, by cloning the code from its address on the GitHub repository. To do this you must:
- Download the Vite-JS tool in the Visual Studio Code editor.
- Access a Vite-JS Terminal.
- Access the link of the Github repository where the app is located.
- Copy the existing code in the previous repository.
- Type in the Terminal the git clone command, paste the code and press Enter.
- View the app.