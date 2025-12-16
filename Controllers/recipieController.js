export const getAllRecipie = (req, res) => {
    res.status(200).json({
        message: "all Recipies"
    })
}

export const createRecipie = (req, res) => {
    res.status(200).json({
        message: "recipie created successfully"
    })
}; 

export const updateRecipie = (req, res) => {
    const recipieId = req.params.id; 
    res.status(200).json({
        message: `recipie updated successfully ${recipieId}`  
    })
}; 