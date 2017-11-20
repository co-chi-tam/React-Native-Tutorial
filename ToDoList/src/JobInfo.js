
class JobInfo {

    constructor(_jobName) {
        this.id = 0;
        this.jobName = _jobName;
        this.jobDescription = '';
        this.jobTime = Date.now();
        this.jobActive = false;
    }
}
export default JobInfo;