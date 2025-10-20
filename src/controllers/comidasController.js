import * as comidasModel from './../models/comidasModel.js';

export const listAll = async (req, res) => {
    try {
        const comidas = await comidasModel.findAll()

        if(!comidas || comidas.length === 0){
            res.status(404).json({
                total: 0,
                mensagem: 'Não há comidas na lista',
                comidas
            });
        };

        res.status(200).json({
            total: comidas.length,
            mensagem: `Lista de comidas`,
            comidas
        });
    } catch (error) {
        res.status(500).json({
            error: 'Erro interno de servidor',
            details: error.message,
            status: 500
        });
    };
};

export const listOne = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const comida = await comidasModel.findOne(id);

        if(!comida){
            return res.status(404).json({
                error: 'Comida não encontrada',
                message: 'Verifique o id da comida',
                id: id
            });
        };
        res.status(200).json({
            message: 'Comida encontrada!',
            comida
        });
    } catch (error) {
        res.status(500).json({
            error: 'Erro interno de servidor',
            details: error.message,
            status: 500
        });
    }
} ;