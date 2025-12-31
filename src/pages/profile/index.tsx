import React, { useState } from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const Profile = () => {
    const [profile, setProfile] = useState({
        fullName: "",
        nickName: "Thanh Truc",
        phone: "0375839301",
        email: "truccc.005@gmail.com",
        facebook: "https://www.facebook.com",
        relationship: "",
        dob: "2005-04-01",
        gender: "FeMale",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const breadcrumbItems = [
        {
            href: "/",
            title: <HomeOutlined />,
        },
        {
            title: "Profile",
        },
    ];

    return (
        <div className="min-h-screen ">
            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} className="mt-6 px-6" />

            <div className="px-6 py-4">
                <h1 className="text-2xl font-bold text-gray-800">Thanh Trúc</h1>
                <p className="text-sm text-gray-500">Mon, 15 September 2025</p>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border px-8 py-8">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">

                    <div className="flex items-center space-x-5">
                        <img
                            src="avatar.png"
                            alt="User avatar"
                            className="w-20 h-20 rounded-full object-cover border-4 shadow-sm"
                        />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">Thanh Trúc</h2>
                            <p className="text-sm text-gray-500">{profile.email}</p>
                        </div>
                    </div>
                    
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <label className="text-sm text-gray-700 font-medium block mb-1">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={profile.dob}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-700 font-medium block mb-1">Gender</label>
                        <select
                            name="gender"
                            value={profile.gender}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm text-gray-700 font-medium block mb-1">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Your Full Name"
                            value={profile.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-700 font-medium block mb-1">Nick Name</label>
                        <input
                            type="text"
                            name="nickName"
                            placeholder="Your Nickname"
                            value={profile.nickName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-700 font-medium block mb-1">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Your Phone Number"
                            value={profile.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-700 font-medium block mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={profile.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-700 font-medium block mb-1">Facebook Link</label>
                        <input
                            type="text"
                            name="facebook"
                            placeholder="Facebook URL"
                            value={profile.facebook}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-700 font-medium block mb-1">
                            Relationship Status
                        </label>
                        <select
                            name="relationship"
                            value={profile.relationship}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="dating">Đang hẹn hò</option>
                            <option value="engaged">Đã đính hôn</option>
                        </select>
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="text-sm font-semibold text-gray-800 mb-3">
                        My Email Address
                    </h3>
                    <div className="flex items-center justify-between bg-gray-50 border rounded-lg px-4 py-3 shadow-sm">
                        <div className="flex items-center space-x-3">
                            <i className="fas fa-envelope text-blue-600"></i>
                            <div>
                                <p className="text-sm text-gray-600">{profile.email}</p>  
                                <p className="text-xs text-gray-400">1 month ago</p>
                            </div>
                        </div>
                    </div>
                    <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">
                        + Add Email Address
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;