import jwt from 'jsonwebtoken'
const KEY = "==!90#$InSaNiTy=="

export function gerarToken(userInfo){
    return jwt.sign(userInfo, KEY)
}

export function autenticar(req, res, next){
    return autenticacao(req,res,next)
}

export function autenticacao(req, resp, next) {
    try {
      let token = req.headers['x-access-token'];
  
      if (token === undefined)
        token = req.query['x-access-token']
  
      let signed = jwt.verify(token, KEY);
      req.user = signed;
      next();
    } catch (e) {
      resp.status(401).end();
    }
  }
  