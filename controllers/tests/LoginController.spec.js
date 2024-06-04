const LoginController = require('../LoginController')

describe("Login Controller", ()=>{
    test("Should Create User Successfully",async ()=>{
        const req = {
            body:{
                email: "teste@fatec.sp.gov.br",
                password:"123"
            }
        }
        const res = { 
            code: jest.fn().mockReturnThis,
            send: jest.fn()            
        }

        await LoginController.createUser(req,res);

        expect(res.code).toHaveBeenCalledWith(200);
    });
});