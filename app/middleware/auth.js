/**
 * Created by libo on 2017/6/14.
 */
exports.jwt = function (req, res, next) {

    console.info(`jwt is coding!`)

    console.info(`before middleware next call`)

    next();

    console.info(`after middleware next call`)
}