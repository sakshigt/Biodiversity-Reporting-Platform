import React, { useEffect, useState } from 'react';
import './adminDashboard.css';

export default function AdminDashboard() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/reports', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setReports(data);
        } catch (error) {
            console.error('There was a problem fetching the reports:', error);
        }
    };

    const downloadCSV = () => {
        // Prepare CSV content
        const csvContent = "data:text/csv;charset=utf-8," +
            "ID,Address,Species\n" +
            reports.map(report => `${report.id},${report.address},${report.selectedSpecies}`).join("\n");

        // Create a temporary link element
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "reports.csv");
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Clean up
        document.body.removeChild(link);
    };

    return (
        <div className="admin-dashboard">
            <h1 className="report-heading">Complaints Reported</h1>
            <div className="report-container">
                <button className="download-button" onClick={downloadCSV}>Download CSV</button>
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Address</th>
                            <th>Species</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report, index) => (
                            <tr key={index}>
                                <td>{report.id}</td>
                                <td>{report.address}</td>
                                <td>{report.selectedSpecies}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
