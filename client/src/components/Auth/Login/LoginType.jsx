import { Building2, GraduationCap, Users } from 'lucide-react'
import React from 'react'

export default function LoginType({   setLoginType }) {
    return (
        <div className='p-10 border bg-slate-900 border-slate-800 rounded-xl flex flex-col items-center justify-center'>
                <h3 className="text-2xl font-bold text-center text-white mb-8">Choose Login Type</h3>
                <div className="space-y-4">
                    <button
                        onClick={() =>
                            setLoginType('admin')
                            // console.log("first")
                        }
                        className="w-full flex items-center justify-center px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-colors"
                    >
                        <Building2 className="h-5 w-5 text-indigo-400 mr-3" />
                        <span className="text-white font-medium">Login as Admin</span>
                    </button>
                    <button
                        onClick={() =>
                            setLoginType('student')
                            // console.log("first")

                        }
                        className="w-full flex items-center justify-center px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-colors"
                    >
                        <GraduationCap className="h-5 w-5 text-indigo-400 mr-3" />
                        <span className="text-white font-medium">Login as Student</span>
                    </button>
                    <button
                        onClick={() =>
                            setLoginType('agent')
                            // console.log("first")

                        }
                        className="w-full flex items-center justify-center px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-colors"
                    >
                        <Users className="h-5 w-5 text-indigo-400 mr-3" />
                        <span className="text-white font-medium">Login as Agent</span>
                    </button>
                </div>
    

        </div>
    )
}
