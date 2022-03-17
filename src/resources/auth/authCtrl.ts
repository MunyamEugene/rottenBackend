import 'dotenv/config';
import { Request, Response, Router } from "express";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth"
import { Controller } from "../../utils/interfaces/controller.interface";
export class AuthCtrl implements Controller{
    public path: string;
    public route: Router;
    public userPorfile:any;
    public google_client_id:string;
    public google_client_secret:string;
    constructor(){
        this.userPorfile={};
        this.path='/auth';
        this.route=Router();
        this.google_client_id=process.env.GOOGLE_ID;
        this.google_client_secret=process.env.GOOGLE_SECRET;
        this.googleCofig();
        this.serialize();
        this.deserialize();
        this.authROutes();

    }

    public googleCofig = ()=>{
         passport.use(new GoogleStrategy.OAuth2Strategy({
            clientID:this.google_client_id,
            clientSecret:this.google_client_secret,
            callbackURL:process.env.callbackURL
        },(accessToken, refreshToken, profile, done)=>{
            this.userPorfile=profile._json;
            done(null,profile);
        }));
    }

    public serialize = ()=>{
        return passport.serializeUser((user,done)=>{
            done(null,user)
        })
    }

    public deserialize = ()=>{
        return passport.deserializeUser((user,done)=>{
            done(null,user)
        })
    }
    public authSucces = (req:Request,res:Response)=>{
        res.send(this.userPorfile);
    }

    public errRoute=(req:Request,res:Response)=>{
        res.send("error loggin")
    }
    public successRoute = (req:Request,res:Response)=>{
        res.redirect(process.env.UI_URL);
    }

    public logOut=(req:Request,res:Response)=>{
        this.userPorfile={};
        res.send(this.userPorfile);
    }

    public authROutes=()=>{
        this.route.get(`${this.path}/google`,passport.authenticate('google',{scope:['profile','email']}));
        this.route.get(`${this.path}/google/callback`,passport.authenticate('google',{failureRedirect:'/api/err'}),this.successRoute)
        this.route.get('/err',this.errRoute);
        this.route.get(`${this.path}/success`,this.authSucces);
        this.route.get(`${this.path}/logout`,this.logOut);

    }
}