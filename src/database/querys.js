export const querys = {
    getAllProducts: "SELECT TOP(500) * FROM [olympiadb].[dbo].[Products]",
    getProducById: "SELECT * FROM Products Where Id = @Id",
    addNewProduct:
      "INSERT INTO [olympiadb].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
    deleteProduct: "DELETE FROM [olympiadb].[dbo].[Products] WHERE Id= @Id",
    getTotalProducts: "SELECT COUNT(*) FROM olympiadb.dbo.Products",
    updateProductById:
      "UPDATE [olympiadb].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
  };