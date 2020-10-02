
const connection = require('../../mysql').pool
const crypto = require('crypto')

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


exports.BuscaTemas = async (req, res) => {

    try {

        await connection.getConnection((error, conn) => {
            if (error) {
                return res.send(400)
            }
            conn.query(
                'SELECT Tema FROM Temas',
                (error, resultado) => {
                    conn.release()

                    if (error) {
                        return res.status(400).send({ erro: error, resultado: null })
                    }
                    return res.status(200).send(resultado)

                }
            )
        })

    } catch (e) {
        res.status(401).send(e)
    }
}
exports.post = async (req, res, next) => {

    try {

        await connection.getConnection((error, conn) => {
            if (error) {
                return res.send(400)
            }
            conn.query(
                'INSERT INTO Temas (Tema) VALUE (?)',
                [req.body.Tema],
                (error, resultado) => {
                    conn.release();
                    if (error) {
                        res.status(400).send({ error: error })
                    }

                    res.status(200).send({ message: 'cadastrado com sucesss' })
                }
            )
        })

    } catch (e) {
        res.status(400).send(e)
    }

}

