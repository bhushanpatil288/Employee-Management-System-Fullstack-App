import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { employeeDetails } from "../api/api";
import { updateEmployee } from "../store/employeeThunk";
import { useState } from "react";

function UpdateEmployee() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    employeeDetails(id).then((res) => {
      const emp = res.data.data;
      reset({
        name: emp.name || "",
        email: emp.email || "",
        phone: emp.phone || "",
        position: emp.position || "",
        salary: emp.salary || "",
      });
      setLoading(false);
    });
  }, [id, reset]);

  const onSubmit = (data) => {
    try {
      dispatch(updateEmployee({ ...data, _id: id }));
      navigate("/employees-list");
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 max-w-2xl mx-auto h-full flex flex-col justify-center">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Update Employee</h1>
          <p className="text-slate-500 mt-2">Modify the details below to update the team member record.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
              <input
                type="text"
                placeholder="e.g. Jane Doe"
                className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'} bg-slate-50 focus:bg-white outline-none transition-all duration-200`}
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long"
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Name must contain only letters and spaces"
                  }
                })}
              />
              {errors.name && (
                <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
              <input
                type="email"
                placeholder="jane.doe@company.com"
                className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'} bg-slate-50 focus:bg-white outline-none transition-all duration-200`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
              <input
                type="text"
                placeholder="e.g. 1234567890"
                className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'} bg-slate-50 focus:bg-white outline-none transition-all duration-200`}
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number"
                  }
                })}
              />
              {errors.phone && (
                <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Position & Salary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Position</label>
                <select
                  className={`w-full px-4 py-3 rounded-xl border ${errors.position ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'} bg-slate-50 focus:bg-white outline-none transition-all duration-200`}
                  {...register("position", {
                    required: "Position is required",
                  })}
                >
                  <option value="">Select Position</option>
                  <option value="manager">Manager</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="tester">Tester</option>
                </select>
                {errors.position && (
                  <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    {errors.position.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Salary</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-500 font-medium">$</span>
                  </div>
                  <input
                    type="number"
                    placeholder="60000"
                    className={`w-full pl-8 pr-4 py-3 rounded-xl border ${errors.salary ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/20'} bg-slate-50 focus:bg-white outline-none transition-all duration-200`}
                    {...register("salary", {
                      required: "Salary is required",
                      min: {
                        value: 0,
                        message: "Salary must be positive"
                      }
                    })}
                  />
                </div>
                {errors.salary && (
                  <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    {errors.salary.message}
                  </p>
                )}
              </div>
            </div>

          </div>

          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={() => navigate("/employees-list")}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-4 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateEmployee;