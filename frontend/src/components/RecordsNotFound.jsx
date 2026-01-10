import React from 'react'
import { NotebookIcon } from "lucide-react";
import { Link } from "react-router-dom";

const RecordsNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
            <div className="bg-primary/10 rounded-full p-8">
                <NotebookIcon className="size-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">No records found</h3>
            <p className="text-base-content/70">
                Create your first record and start building.
            </p>
            <Link to="/create" className="btn btn-primary">
                Insert your First Record
            </Link>
        </div>
    );
}

export default RecordsNotFound