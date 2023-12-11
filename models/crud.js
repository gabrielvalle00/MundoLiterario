const fs = require('fs'); //importando File System

const crud = {
    myData: [],
    read(filePath) {
        if (fs.existsSync(filePath)) {
            this.myData = JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }));
            return crud.myData;
        }
    },
    create(obj, filePath) {
        this.myData.push(obj);
        fs.writeFileSync(filePath, JSON.stringify(crud.myData), { encoding: 'utf-8' });
    },
    verificaId() {
        if (this.myData.length > 0) {
            let idMaximo = crud.myData.at(-1).id;
            return ++idMaximo;
        }
        return 1;
    },
    delete(obj, filePath) {
        const delLivro = this.myData.indexOf(obj);  
        if (delLivro !== -1) { //vai verificar se no array o livro existe, se não vi dar erro 
            this.myData.splice(indexToRemove, 1); // essa linha faz remover o livro
            fs.writeFileSync(filePath, JSON.stringify(this.myData), { encoding: 'utf-8' });
        } else {
            console.error("Livro não encontrado!");
        }
    }
}

module.exports = crud;