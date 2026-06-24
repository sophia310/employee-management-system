const router=require("express").Router();

const protect=require("../middleware/authMiddleware");

const {
 addEmployee,
 getEmployees,
 updateEmployee,
 deleteEmployee,
 searchEmployee
}=require("../controllers/employeeController");

router.post("/",protect,addEmployee);

router.get("/",protect,getEmployees);

router.put("/:id",protect,updateEmployee);

router.delete("/:id",protect,deleteEmployee);

router.get("/search",protect,searchEmployee);

module.exports=router;