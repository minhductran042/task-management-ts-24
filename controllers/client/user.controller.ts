import { Request, Response } from "express";
import User from "../../models/user.model";
import { generateRandomString } from "../../helpers/generate.hepler";
import md5 from 'md5';

// [POST] /users/register
export const register = async (req: Request,res: Response) => {
    try {   

        const existUser = await User.findOne({
            email: req.body.email,
            deleted: false
        }) 

        if(existUser) {
            res.json({
                code: 400
            })
            return;
        }


        const token = generateRandomString(30);
        const userDataRegister = {
            fullName: req.body.fullName,
            email: req.body.email,
            password: md5(req.body.password),
            token: token
        }
        
        const user = new User(userDataRegister);
        await user.save();
        
        res.json({
            code: 200,
            message: "Đăng ký thành công!"
        })
    } catch(error) {
        res.json({
            message: "Not Found"
        });
    }
}