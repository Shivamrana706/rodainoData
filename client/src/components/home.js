

const Home = () => {
    return (
        <div>

            <div>
                <img src={require("../images/truck1.webp")} height="200" width="50%" className="img-fluid" alt="Responsive image"></img>
                <img src={require("../images/truck2.webp")} height="200" width="50%" className="img-fluid" alt="Responsive image"></img>
            </div>

            <div className="col-md-12 column">
                Roadino Transport, Inc. is an active DOT registered motor carrier operating under USDOT Number 3439420 and MC Number 1116629.<br></br>
                <table className="table table-striped table-condensed borderless" width="50%">
                    <tbody>
                        <tr>
                            <td width="75%"><strong>Total Trucks</strong></td>
                            <td width="25%">5</td>
                        </tr>
                        <tr>
                            <td><strong>Tractors Owned</strong></td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td><strong>Trailer Owned</strong></td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td><strong>Total Drivers</strong></td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td><strong><abbr title="Unique Identifier for transport companies operating commercial vehicles hauling cargo in interstate commerce registered with the FMCSA" className="initialism">USDOT</abbr></strong></td>
                            <td>3439420</td>
                        </tr>
                        <tr>
                            <td><strong><abbr title="Motor Carrier Number identifies a carrier transporting regulated commodities in interstate commerce" className="initialism">MC Number</abbr></strong></td>
                            <td>1116629</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>MCS-150 Mileage Year</strong>
                            </td>
                            <td colSpan="3">
                                2021 </td>
                        </tr>
                        <tr>
                            <td>
                                <strong><abbr title="Date from the MCS-150 Registration Form." className="initialism">MCS-150 Date</abbr></strong>
                            </td>
                            <td colSpan="3">
                                20221205 </td>
                        </tr>
                        <tr>
                            <td>
                                <strong><abbr title="Mileage from the MCS-150 Registration Form." className="initialism">MCS-150 Mileage</abbr></strong>
                            </td>
                            <td colSpan="3">
                                870000 </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Does Roadino Transport, Inc. transport Hazardous Material?</strong>
                            </td>
                            <td colSpan="3">
                                No </td>
                        </tr>
                        <tr>
                            <td>
                                <strong><abbr title="Interstate - Truck driver transports across State lines, or wholly within one State as part of a through movement that originates or terminates in another State.
                                          Intrastate - Truck driver transports wholly within one State.">Carrier Operation</abbr></strong>
                            </td>
                            <td colSpan="3">
                                Interstate </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Roadino Transport, Inc. in business since</strong>
                            </td>
                            <td colSpan="3">
                                20200612 </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <p>More details
                <a href="https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&query_type=queryCarrierSnapshot&query_param=USDOT&original_query_param=NAME&query_string=3439420&original_query_string=ROADINO%20TRANSPORT%20INC" > 1, </a>
                <a href="https://www.quicktransportsolutions.com/truckingcompany/manitoba/roadino-transport-inc-usdot-3439420.php"> 2 </a>
            </p>
        </div>
    )
}
export default Home