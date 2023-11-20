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

export class ProjectDB<TData> {
    public data: TData
  
    constructor(private readonly dbPath: string, initial: TData) {
      this.data = this.load(initial)
    }
    
    public update = (data: Partial<TData>) =>
      (this.data = { ...this.data, ...data })
  
    public commit = () => this.persist(this.data)
  
    private persist = (data: TData) =>
      writeFileSync(this.dbPath, JSON.stringify(data))
  
    private read = (): TData =>
      JSON.parse(readFileSync(this.dbPath).toString()) as TData
  
    private load = (initial: TData): TData => {
      if (!existsSync(this.dbPath)) {
        this.persist(initial)
        console.log("Creating Projects DB")
      }
  
      const current = this.read()
  
      return {
        ...initial,
        ...current,
      }
    }
  }








//https://nabeelvalley.co.za/blog/2022/06-07/typescript-json-database/