export default function ClientLegalInformation() {
    return (
      <div className="bg-white h-full rounded-md shadow-md flex items-center">
        <div className="flex flex-col">
          <div>
            <h1 className="text-lg text-center text-decoration-line: underline">Client Legal Information</h1>
          </div>
          <div className="p-6">
            <div className="mt-5">
              <h2 className="text-lg">RYAN K GOODE</h2>
              <p className="m-1 text-sm">May 30, 2022</p>
              <p className="m-1 text-sm">36 YEAR OLD MALE from SOUTH HILL, VA</p>
  
              <h3 className="mt-10 text-lg">Violation Information:</h3>
              <div className="ml-3">
                <p className="m-1 text-sm">2013E22002366 - 39:3-10 / DRIVING WITHOUT A LICENSE</p>
                <p className="m-1 text-sm">2013E22002367 - 39:4-51A.B / OPEN CONTAINER OF ALCOHOLIC BEV - DRVR</p>
                <p className="m-1 text-sm">2013E22002368 - 39:4-67 / OBSTRUCTING PASSAGE OF OTHER VEHICLES</p>
              </div>
              <h3 className="mt-10 text-lg">Court Information:</h3>
              <div className="text-sm m-1 ml-3 flex text-center items-center justify-between">
                <div>
                  <p>Rahway City (2013)</p>
                  <p>Union County</p>
                  <p>Rahway, NJ 07065</p>
                </div>
                <div>
                  <p>Phone: (732)-827-2039</p>
                  <p>Fax: (732)-381-9879</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  