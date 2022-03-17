import {ExceptionLogger}  from "../utils/exceptions/exceptions";
import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (err:ExceptionLogger,req:Request,res:Response,_next:NextFunction):void=>{
    const status = err.status||500
    const message=err.message||'Something went wrong'
    res.status(status).send({status,message})
}
