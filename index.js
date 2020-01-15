class Office {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;

        if( typeof Office.instance === 'object' ) { // La primera vez Office.instance es undefined
            return Office.instance; // Si ya existe una instancia la devolvemos.
        }

        Office.instance = this; 
        return this;
    }
}

const createInstance = () => {
    const name = document.getElementById('name').value;
    const employees = document.getElementById('employees').value;
    return new Office(name, employees);
}

const setData = () => {
    const office = createInstance();
    const list = document.getElementById('list');
    const item = document.createElement('li');
    
    item.appendChild(document.createTextNode( `${office.name} - ${office.employees}`));
    list.appendChild(item);
}