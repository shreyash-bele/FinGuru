
const model = require('../models/model');

// Define your create_Categories function
async function create_Categories(req, res) {
    try {
        // Create a new instance of the Categories model
        const Create = new model.Categories({
            type: "Expense",
            color: "#C43095"
        });

        // Save the new category to the database
        await Create.save();

        // Respond with the newly created category
        return res.json(Create);
    } catch (error) {
        // If an error occurs, send an error response
        return res.status(400).json({ message: `Error while creating category: ${error.message}` });
    }
}

async function  get_Categories(req, res){
    let data = await model.Categories.find({})

    let filter = await data.map(v => Object.assign({}, { type: v.type, color: v.color}));
    return res.json(filter);
}

//  post: http://localhost:8080/api/transaction
async function create_Transaction(req, res) {
    if (!req.body) return res.status(400).json("Post HTTP Data not Provided");
    let { name, type, amount } = req.body;

    try {
        const create = await new model.Transaction({
            name,
            type,
            amount,
            date: new Date()
        });

        await create.save();

        return res.json(create);
    } catch (error) {
        return res.status(400).json({ message: `Error while creating category: ${error.message}` });
    }
}

//  get: http://localhost:8080/api/transaction
async function get_Transaction(req, res){
    let data = await model.Transaction.find({});
    return res.json(data);
}

//  delete: http://localhost:8080/api/transaction
async function delete_Transaction(req, res) {
    if (!req.body) return res.status(400).json({ message: "Post HTTP Data not Provided" });
    
    try {
        await model.Transaction.deleteOne(req.body);

        return res.json("Record Deleted...!");
    } catch (error) {
        return res.status(400).json({ message: "Error while deleting Transaction Record" });
    }
}

async function get_Labels(req, res) {
    try {
        const labels = await model.Transaction.aggregate([
            {
                $lookup: {
                    from: "categories",
                    localField: 'type',
                    foreignField: "type",
                    as: "categories_info"
                }
            },
            {
                $unwind: "$categories_info"
            }
        ]);

        const data = labels.map(v => ({
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.categories_info['color']
        }));

        return res.json(data);
    } catch (error) {
        return res.status(400).json({ message: "Lookup Collection Error" });
    }
}




module.exports = { create_Categories,
    get_Categories,
    create_Transaction,
    get_Transaction,
    delete_Transaction,
    get_Labels

};

