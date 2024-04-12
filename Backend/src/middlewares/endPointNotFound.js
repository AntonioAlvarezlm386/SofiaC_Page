/** middlewares for bad endpoints */

export const endpointNotFound = (req, res, next) => {
    res.status(404).json({
        message: "This endpoint doesn't exists"
    })
}