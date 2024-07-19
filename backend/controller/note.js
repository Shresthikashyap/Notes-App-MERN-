
const Note = require('../model/note');

exports.getNotes = async(req, res) => {
  
  try{
  
      const prevnotes = await Note.findAll();

      console.log(prevnotes)
   
      res.status(201).json({ prevnotes });
      
  }
  catch(err){
      
          console.log(err);
          res.status(500).json({ error: 'Something went wrong' });   
  }
}

exports.addNote = async(req, res) => {
  
  try{
   
      const content = req.body.text;
    
     const note =  await Note.create({content: content});
      
      res.status(201).json({ note });
      
  }
  catch(err){
      
          console.log(err);
          res.status(500).json({ error: 'Something went wrong' });   
  }
}

exports.deleteNote = async (req, res) => {
  try {
   
    const id = req.params.id; 

    const response = await Note.destroy({ where: { id: id } });
   
    res.status(200).send({ response });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
