import {existsSync, readFileSync, writeFileSync} from 'fs';


// Function to convert time until project is due into days.
function deadlineTimeUntil(deadline: Date)
{
    const currentDate = new Date();
    const diff = Math.abs(deadline.getTime() - currentDate.getTime());
    console.log("The diff is" + diff);
    const diffdays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffdays;
}

//Class for each project

export class ProjectDB<Object> {
    public data: Object
  
    constructor(private readonly dbPath: string, initial: Object) {
      this.data = this.load(initial)
    }
    
    public update = (data: Partial<Object>) =>
      (this.data = { ...this.data, ...data })
  
    public commit = () => this.persist(this.data)
  
    private persist = (data: Object) =>
      writeFileSync(this.dbPath, JSON.stringify(data))
  
    private read = (): Object =>
      JSON.parse(readFileSync(this.dbPath).toString()) as Object
  
    private load = (initial: Object): Object => {
      if (!existsSync(this.dbPath)) {
        this.persist(initial)
        console.log("Creating Projects DB")
      }
  
      const current = this.read()
      this.data = current
      return {
        ...initial,
        ...current,
      }
    }
  }








//https://nabeelvalley.co.za/blog/2022/06-07/typescript-json-database/