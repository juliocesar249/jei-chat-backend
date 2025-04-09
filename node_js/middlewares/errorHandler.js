export default function errorHandler(err, req, res, next) {
    if(err instanceof Error) {
        console.log(err);
        res.status(err.status).json({mensagem: err.message});
        next();
    } else {
        console.error(err)
        res.status(500).json({erro: 'Erro inesperado.'});
    }
}