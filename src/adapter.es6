const find = (db, id) => db
.get(id);

const findAll = db => db
.allDocs({
  attachments: true,
  include_docs: true
})
.then(docs => docs.rows.map(row => row.doc));

const create = (db, payload) => db
.post(payload)
.then(result => find(db, result.id));

const del = (db, id) => find(db, id)
.then(doc => {
  const nextDoc = {
    ...doc,
    _deleted: true
  };

  return db.put(nextDoc);
});

const deleteAll = db => findAll(db)
.then(docs => docs.map(doc => del(db, doc._id)));

const delAttachment = (db, id, att) => find(db, id)
.then(doc => db
.removeAttachment(doc.id, att, doc._rev)
.then(finalDoc => find(db, finalDoc.id)));

const update = (db, payload) => find(db, payload.id)
.then(doc => {
  delete payload._rev;
  payload._rev = doc._rev;

  const nextDoc = {
    ...doc,
    ...payload
  };

  return db
  .put(nextDoc)
  .then(finalDoc => find(db, finalDoc.id));
});

export default {
  create,
  del,
  delAttachment,
  deleteAll,
  find,
  findAll,
  update
};
