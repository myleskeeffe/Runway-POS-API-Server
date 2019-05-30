var AuthenticationController = require('./controllers/authentication'),  
    TodoController = require('./controllers/todos'),
    ProductController = require('./controllers/products'),  
    BusinessController = require('./controllers/business'),
    orderController = require('./controllers/orders'),
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});

module.exports = function(app){

    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        todoRoutes = express.Router(),
        productRoutes = express.Router(),
        businessRoutes = express.Router();
        orderRoutes = express.Router();

    // Auth Routes
    apiRoutes.use('/auth', authRoutes);

    authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);

    authRoutes.get('/protected', requireAuth, function(req, res){
        res.send({ content: 'Success'});
    });

    // Todo Routes
    apiRoutes.use('/todos', todoRoutes);

    todoRoutes.get('/', requireAuth, AuthenticationController.roleAuthorization(['user','sales','admin']), TodoController.getTodos);
    todoRoutes.post('/', AuthenticationController.roleAuthorization(['sales','admin']), TodoController.createTodo);
    todoRoutes.delete('/:todo_id', AuthenticationController.roleAuthorization(['admin']), TodoController.deleteTodo);

    // Product Routes
    apiRoutes.use('/products', productRoutes);

    productRoutes.get('/', requireAuth, AuthenticationController.roleAuthorization(['user','sales','admin']), ProductController.getProducts);
    productRoutes.post('/', requireAuth, AuthenticationController.roleAuthorization(['sales','admin']), ProductController.createProduct);
    productRoutes.delete('/:product_id', requireAuth, AuthenticationController.roleAuthorization(['admin']), ProductController.deleteProduct);
    productRoutes.get('/find/:product_id', requireAuth, AuthenticationController.roleAuthorization(['user,','sales','admin']), ProductController.findProduct);

    // Business Routes
    apiRoutes.use('/businesses', businessRoutes);

    businessRoutes.get('/', requireAuth, AuthenticationController.roleAuthorization(['user','sales','admin']), BusinessController.getBusinesses);
    businessRoutes.post('/', requireAuth, AuthenticationController.roleAuthorization(['sales','admin']), BusinessController.createBusiness);
    businessRoutes.delete('/:business_id', requireAuth, AuthenticationController.roleAuthorization(['admin']), BusinessController.deleteBusiness);
    businessRoutes.get('/find/:business_id', requireAuth, AuthenticationController.roleAuthorization(['user,','sales','admin']), BusinessController.findBusiness);

    // Order Routes
    apiRoutes.use('/orders', orderRoutes);

    orderRoutes.get('/', requireAuth, AuthenticationController.roleAuthorization(['user','sales','admin']), orderController.getOrders);
    orderRoutes.post('/', requireAuth, AuthenticationController.roleAuthorization(['sales','admin']), orderController.createOrder);
    orderRoutes.delete('/:order_id', requireAuth, AuthenticationController.roleAuthorization(['admin']), orderController.deleteOrder);
    orderRoutes.get('/find/:order_id', requireAuth, AuthenticationController.roleAuthorization(['user,','sales','admin']), orderController.findOrder);

    // Set up routes
    app.use('/api', apiRoutes);

}