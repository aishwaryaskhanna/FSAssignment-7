
const names = ['Mango', 'Only', 'Zara', 'Crocs', 'Tommy Hilfiger', 'Hugo Boss'];
const categories = ['shirt', 'jeans', 'sweater', 'jacket', 'accessories'];

const initialCount = db.module4collection.count();

for (let i = 0; i < 100; i += 1) {
  const Name = names[Math.floor(Math.random() * 6)];
  const Category = categories[Math.floor(Math.random() * 5)];
  const Price = Math.ceil(Math.random() * 20);
  const Image = `url${i}`;
  const id = initialCount + i + 1;
  const prd = {
    id, Name, Price, Image, Category,
  };
  db.module4collection.insertOne(prd);
}

const count = db.module4collection.count();
db.counters.update({ _id: 'module4collection' }, { $set: { current: count } });
print('New product count:', count);