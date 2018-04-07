var express = require('express');
var app = express();
var mongo = require('mongodb');
var assert = require('assert');
var bodyParser = require('body-parser');
var cors = require('cors');
var ObjectId = require('mongodb').ObjectId; 


app.set('port', (process.env.PORT || 8000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var url = "mongodb://stellosphere:vision2020@marvolez-shard-00-00-fch1s.mongodb.net:27017,marvolez-shard-00-01-fch1s.mongodb.net:27017,marvolez-shard-00-02-fch1s.mongodb.net:27017/test?ssl=true&replicaSet=Marvolez-shard-0&authSource=admin";

//Sample API
app.get('/', function(req, res){
    res.send("TODO CRUD Operations");
});

//    LOGIN API
//tested 06th April 2018: Bharath Ravichandran
app.post('/login', function(req, res){
    console.log(req.body);
    var resultArry = [];
    mongo.connect(url, function(err, db){
      assert.equal(null, err);
      var cursor = db.collection('TaskDetails').find({email: req.body.email});
      cursor.forEach(function(doc, err){
        assert.equal(null, err);
        if(doc.password == req.body.password){
          resultArry.push({valid:"true",type:doc.type});
        }else{
          resultArry.push({valid:"false"});
        }
  
      }, function(){
        db.close();
        res.json(resultArry);
      });
    });
  });



//  Registration details
//tested 06th April 2018: Bharath Ravichandran
 app.post('/registration', function(req, res){
  var Registration = {
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    address: req.body.address,
    status: req.body.status,
    password: req.body.password,
  };
  mongo.connect(url, function(err, db){
    assert.equal(null, err);
    db.collection('TaskDetails').insertOne(Registration,function(err, result){
      if(err){
        res.send("false");
      }else{
        res.send("true");
      }
      db.close();
    });
  });
});



//API TO RESET PASSWORD
//tested 06th April 2018: Bharath Ravichandran

app.post('/reset', function(req, res){
  console.log(req.body.email);
  var resultArry = [];
  mongo.connect(url, function(err, db){
    assert.equal(null, err);
    var cursor = db.collection('TaskDetails').find({email: req.body.email});
    cursor.forEach(function(doc, err){
      assert.equal(null, err);

      if(doc.email == req.body.email){
        // resultArry.push({valid:"true",type:doc.type});
      }

    }, function(){
      db.close();
      res.json(resultArry);
    });
  });
});


//API to display TaskDetails
//tested 06th April 2018: Bharath Ravichandran
app.get('/showTaskDetails', function(req, res){
    var resultArry = [];
    mongo.connect(url, function(err, db){
      assert.equal(null, err);
      var cursor = db.collection('TaskDetails').find();
      cursor.forEach(function(doc, err){ 
        assert.equal(null, err);
        resultArry.push(doc);
      },
        function(){
            db.close();
            if (err) {
                console.log(err);
            } else {
                res.send(resultArry);
            }
        });
    });
});


//view display edit Task Details 
//tested 06th April 2018: Bharath Ravichandran
app.get('/showEditTaskDetails', function(req, res){
    var resultArry = "";
    mongo.connect(url, function(err, db){
      assert.equal(null, err);
      var cursor = db.collection('TaskDetails').findOne({ _id: req.body._id });
  
        assert.equal(null, err);
        // resultArry.push();

        db.close();
        res.send({results: resultArry });

   });
  });


//API FOR add TaskDetails
//tested 06th April 2018: Bharath Ravichandran
app.post('/addTaskDetails', function(req, res){
  var newTaskDetails = {
      
    taskname: req.body.taskname,
    description: req.body.description
  };
  mongo.connect(url, function(err, db){
  assert.equal(null, err);
      db.collection('TaskDetails').insertOne(newTaskDetails,function(err, result){
        if(err){
            res.send("Failed adding Task details");
        }else{
            res.send("Successfully added Task details");
        }
            db.close();
      });
  });
});


//API for update TaskDetails
//tested 06th April 2018: Bharath Ravichandran
app.put('/updateTaskDetails', function(req, res){
  
  var updateTaskDetails = {
      taskname: req.body.taskname,
      description: req.body.description,
  };

  mongo.connect(url, function(err, db){
      assert.equal(null, err);
      db.collection('TaskDetails').findOneAndUpdate({
          taskname: req.body.taskname,
          description: req.body.description
        }, 
          
        { $set: { 
            taskname: req.body.taskname,
            description: req.body.description
        }
        }, {upsert: true},function(err, result){

        if(err){
            res.send("Failed updating Task details");
        }else{
            res.send("Successfully updated Task details");
        }
            db.close();
      });
  });   
});



//API to delete TaskDetails
//tested 06th April 2018: Bharath Ravichandran
app.delete('/deleteTaskDetails', function(req, res){
    var resultArry = [];
    mongo.connect(url, function(err, db){
      assert.equal(null, err);
      var cursor = db.collection('TaskDetails').findOneAndDelete(
        { 
            _id: req.body.id
        }
      );
      if(err){
        res.send("false");
      }else{
        res.send("true");
      }
        db.close();
    });
});
