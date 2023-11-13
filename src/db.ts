function deadlineTimeUntil(deadline: Date)
{
    const currentDate = new Date();
    const diff = Math.abs(deadline.getTime() - currentDate.getTime());
    const diffdays = Math.ceil(diff / (1000 * 3600) * 24);
    return diffdays;
}


class ProjectBoxes {

    name: string;
    job: string;
    title: string;
    deadline: Date;
    daysuntilcompletion: number;

    constructor(name = "Name",
    job = "Job",
    title = "Title",
    deadline = new Date(),
    daysuntilcompletion = 0
    ){
    this.name = name
    this.job = job;
    this.title = title;
    this.deadline = deadline;
    this.daysuntilcompletion = deadlineTimeUntil(deadline);
    }
}

export default ProjectBoxes;