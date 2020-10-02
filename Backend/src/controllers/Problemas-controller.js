
const connection = require('../../mysql').pool
const crypto = require('crypto')

exports.post = async (req, res) => {

    
    try {

        await connection.getConnection((error, conn) => {
            if (error)
                return res.send(400);
            conn.query(
                'INSERT INTO Problemas (id ,Tema, Titulo, Descricao) VALUES (?,?,?,?)',
                [crypto.randomBytes(4).toString('HEX'),
                req.body.Tema,
                req.body.Titulo,
                req.body.Descricao,
                ],
                (error, resultado, field) => {
                    conn.release();

                    if (error) {
                        return res.status(400).send({
                            error: error,
                            response: null
                        })
                    }
                    res.status(201).send({ message: 'cadastrado com sucesso' })
                }
            )
        })

    } catch (e) {
        console.log(e);
        res.status(400).send({ message: 'erro ao cadastrar', e });
    }

}


exports.getByTema= async (req, res) => {

    await connection.getConnection((error, conn) => {
        if (error)
            return res.send(400);
        conn.query(
            'SELECT * FROM Problemas WHERE Tema =?',
            [req.params.Tema],

            (error, resultado, field) => {
                conn.release();

                if (error) {
                    return res.status(201).send({
                        error: error,
                        response: null
                    })
                }
                res.status(201).send(resultado)
            }
        )
    })
}

