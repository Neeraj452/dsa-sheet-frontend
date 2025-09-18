import React, { useEffect, useState } from "react";
import { getSubject, progressUpdate } from "../../service/api";


const Topics = () => {
    const [expandedTopics, setExpandedTopics] = useState({});
    const [subjects, setSubjects] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [checkedItems, setCheckedItems] = useState([{}]);
    console.log(subjects);
    useEffect(() => {
        getSubject(setLoading, setData)
    }, []);
    useEffect(() => {
        setSubjects(data);
    }, [data]);

    const toggleExpand = (id) => {
        if (expandedTopics === id) {
            setExpandedTopics(null);
        } else {
            setExpandedTopics(id);
        }
    };

    const handleCheckboxChange = (subjectId, topicId, status, topicIndex, subIndex) => {
        progressUpdate({ userId: "68c8cab74a234bfddaa8dab9", subjectId, topicId, status: status === "done" ? "pending" : "done" }, getSubject(setLoading, setData))
    };
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Topics</h1>
            <p className="text-center mb-8 text-black">Explore these exciting topics!</p>

            {
                subjects.length > 0 ? subjects.map((topic, topicIndex) => (
                    <div key={topic.subjectId} className="mb-4 border rounded-lg">
                        {/* Accordion Header */}
                        <div className="flex justify-between  bg-cyan-400">
                            <div className="flex">
                                <button

                                    className="w-full text-left px-4 py-3 text-white font-semibold rounded-t-lg flex justify-between items-center"
                                >
                                    {topic.subjectName}
                                    <span className="bg-red-500 ml-1.5 text-white text-xs px-2 rounded-full p-0.5 items-center text-center">
                                        {topic.status}
                                    </span>
                                </button>
                            </div>
                        <button onClick={() => toggleExpand(topic.subjectId)}>
                            {
                                expandedTopics===topic.subjectId ? <span>&#9650;</span> : <span>&#9660;</span>
                            }
                            </button> 
                               
                        </div>

                        {/* Accordion Body */}
                        {expandedTopics===topic.subjectId && topic.topics.length > 0 && (
                            <div className="p-4 bg-cyan-100">
                                <h2 className="text-lg font-semibold mb-4 text-black">Sub Topics</h2>

                                <table className="min-w-full bg-white ">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2  text-black">Name</th>
                                            <th className="px-4 py-2   text-black">LeetCode Link</th>
                                            <th className="px-4 py-2   text-black">YouTube Link</th>
                                            <th className="px-4 py-2   text-black">Article Link</th>
                                            <th className="px-4 py-2   text-black">Level</th>
                                            <th className="px-4 py-2   text-black">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {topic.topics.map((sub, subIndex) => (
                                            <tr key={`${topicIndex}-${sub._id}-${sub?.status}`} className="hover:bg-gray-50">
                                                <td className="px-4 py-2 ">
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            checked={sub?.status === "done"? true : false}
                                                            onChange={() => handleCheckboxChange(topic?.subjectId, sub?._id, sub?.status, topicIndex, subIndex)}
                                                            className="accent-blue-500 mr-2"
                                                        />
                                                        <span className="ml-2 text-black text-center">{sub.name}</span>
                                                    </label>
                                                </td>
                                                <td className="px-4 py-2 text-center ">
                                                    <a
                                                        href="#"
                                                        className="text-blue-600 underline"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Practise
                                                    </a>
                                                </td>
                                                <td className="px-4 py-2 text-center">
                                                    <a
                                                        href="#"
                                                        className="text-blue-600 underline"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Watch
                                                    </a>
                                                </td>
                                                <td className="px-4 py-2 text-center">
                                                    <a
                                                        href="#"
                                                        className="text-blue-600 underline"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Read
                                                    </a>
                                                </td>
                                                <td className="px-4 py-2 text-center text-black">{sub.level}</td>
                                                <td className="px-4 py-2 text-center text-black">{sub.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )) : subjects.length === 0 ? <p className="text-center text-black">No topics available.</p> : null
            }

        </div>
    );
};

export default Topics;
