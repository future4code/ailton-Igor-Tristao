export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private create_date: Date
    ){}

    static toRecipeModel(data: any): Recipe {
        return new Recipe(data.id, data.title, data.description, data.create_date)
    }

    public getId() {
        return this.id
    }

    public getTitle() {
        return this.title
    }

    public getDescription() {
        return this.description
    }

    public getDate() {
        return this.create_date
    }

}