import { DashboardAcc, DashboardCcl, DashboardDone, DashboardOn, listRenja, orang } from "../store";
import { DashStatusAcc, DashStatusCcl, DashStatusDone, DashStatusOn } from "./load_data";

var loaddata = true;

// DashStatusOn()
function Dashboard() {
  orang.init();
  listRenja.init();

  DashboardOn.init();
  if (DashboardOn.val.length == 0) {
    DashStatusOn();
    console.log(DashboardOn.val.length);
  }

  DashboardAcc.init()
  if(DashboardAcc.val.length == 0){
      DashStatusAcc()
  }

  DashboardDone.init()
  if(DashboardDone.val.length == 0){
      DashStatusDone()
  }

  DashboardCcl.init()
  if(DashboardCcl.val.length == 0){
      DashStatusCcl()
  }

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        {/* {JSON.stringify(listRenja.val, null, 2)} */}
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            {/* <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button> */}
          </div>
          {/* <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        This week
                    </button> */}
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="text-center">
          <h5>STATUS RENCANA KERJA</h5>
        </div>

        <div className="col m-4 card border-success mb-3 text-center" style={{ maxWidth: 150 }}>
          <div className="card-header bg-transparent border-success">
            On Progress
          </div>
          <div className="card-body text-success">
            <h5 className="display-1 text-center">{DashboardOn.val}</h5>
            <p className="card-text"></p>
          </div>
          {/* <div className="card-footer bg-transparent border-success">
            Footer
          </div> */}
        </div>

        <div className="col m-4 card border-success mb-3 text-center" style={{ maxWidth: 150 }}>
          <div className="card-header bg-transparent border-success">
            Accept
          </div>
          <div className="card-body text-success">
            <h5 className="display-1 text-center">{DashboardAcc.val}</h5>
            <p className="card-text"></p>
          </div>
          {/* <div className="card-footer bg-transparent border-success">
            Footer
          </div> */}
        </div>

        <div className="col m-4 card border-success mb-3 text-center" style={{ maxWidth: 150 }}>
          <div className="card-header bg-transparent border-success">
            Done/Succes
          </div>
          <div className="card-body text-success">
            <h5 className="display-1 text-center">{DashboardDone.val}</h5>
            <p className="card-text"></p>
          </div>
          {/* <div className="card-footer bg-transparent border-success">
            Footer
          </div> */}
        </div>

        <div className="col m-4 card border-success mb-3 text-center" style={{ maxWidth: 150 }}>
          <div className="card-header bg-transparent border-success">
            Cancel
          </div>
          <div className="card-body text-success">
            <h5 className="display-1 text-center">{DashboardCcl.val}</h5>
            <p className="card-text"></p>
          </div>
          {/* <div className="card-footer bg-transparent border-success">
            Footer
          </div> */}
        </div>
      </div>
    </main>
  );
}
export { Dashboard };
