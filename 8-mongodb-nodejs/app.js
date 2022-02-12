const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number },
  docs: { type: String },
});

const Product = mongoose.model('product', productSchema);

// create
const productObj = [
  {
    title: 'first',
    price: 200,
    docs: 'docs for your like',
  },
  {
    title: 'second',
    price: 200,
    docs: 'docs for your like',
  },
  {
    title: 'third',
    price: 200,
    docs: 'docs for your like',
  },
];
Product.insertMany(productObj);

// read from the db and get the first id
Product.findOne({ title: 'first' }, (err, result) => {
  if (err) console.log(err);

  const id = result['_id'];

  // update the title
  try {
    Product.updateOne(
      { _id: id },
      { $set: { title: 'new title' } },
      (err, result) => {
        console.log(err, result);
      }
    );
  } catch (err) {
    console.log(err);
  }
});

// remove second item
Product.remove({ title: 'second' }, (err, result) => {
  console.log(err, result, 'remove item');
});
