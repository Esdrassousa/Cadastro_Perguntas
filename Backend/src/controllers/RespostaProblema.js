const mysql = require('mysql2')
const connection = require('../../mysql').pool
const crypto = require('crypto')



exports.post = async (req, res) => {

    try {
        
        await connection.getConnection((error, conn) => {
            if (error)
                return res.send(400);
            conn.query(
                'INSERT INTO Respostas (id, id_Problema, Resposta) VALUES (?,?,?)',
                [crypto.randomBytes(4).toString('HEX'),
                req.body.id_Problema,
                req.body.Resposta],
                //md5(req.body.senha + global.SALT_KEY)
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
        //res.status(201).send({ message: 'cadastrado com sucesso' })

    } catch (e) {
        console.log(e);
        res.status(400).send({ message: 'erro ao cadastrar', e });
    }
}

exports.getByProblema= async (req, res) => {

    await connection.getConnection((error, conn) => {
        if (error)
            return res.send(400);
        conn.query(
            'SELECT * FROM Respostas WHERE id_Problema =?',
            [req.params.id_Problema],

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
