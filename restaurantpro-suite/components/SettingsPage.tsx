
import React from 'react';

const SettingsPage: React.FC = () => {
    return (
        <div className="mx-auto max-w-screen-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
            <div className="grid grid-cols-1 gap-6">
                {/* Change Password Card */}
                <div className="rounded-lg border border-dark-card bg-dark-card p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-white mb-4">Change Password</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-dark-text-secondary mb-2" htmlFor="current-password">Current Password</label>
                            <input type="password" id="current-password" className="w-full bg-dark-bg rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-dark-text-secondary mb-2" htmlFor="new-password">New Password</label>
                            <input type="password" id="new-password" className="w-full bg-dark-bg rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-dark-text-secondary mb-2" htmlFor="confirm-password">Confirm New Password</label>
                            <input type="password" id="confirm-password" className="w-full bg-dark-bg rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-brand-primary text-white font-semibold py-2 px-5 rounded-lg hover:bg-brand-secondary transition-colors">
                                Update Password
                            </button>
                        </div>
                    </form>
                </div>

                {/* Security Questions Card */}
                <div className="rounded-lg border border-dark-card bg-dark-card p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-white mb-4">Security Questions</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-dark-text-secondary mb-2" htmlFor="security-question">Question</label>
                            <select id="security-question" className="w-full bg-dark-bg rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary appearance-none">
                                <option>What was your first pet's name?</option>
                                <option>What city were you born in?</option>
                                <option>What is your mother's maiden name?</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-dark-text-secondary mb-2" htmlFor="security-answer">Answer</label>
                            <input type="text" id="security-answer" className="w-full bg-dark-bg rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                        </div>
                        <div className="flex justify-end">
                             <button type="submit" className="bg-brand-primary text-white font-semibold py-2 px-5 rounded-lg hover:bg-brand-secondary transition-colors">
                                Save Security Info
                            </button>
                        </div>
                    </form>
                </div>

                {/* Forgot Password Section */}
                 <div className="rounded-lg border border-dark-card bg-dark-card p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-white mb-4">Forgot Password</h3>
                    <p className="text-sm text-dark-text-secondary mb-4">If you've forgotten your password, you can request a reset link to be sent to your email address.</p>
                     <form className="space-y-4">
                         <div>
                            <label className="block text-sm font-medium text-dark-text-secondary mb-2" htmlFor="forgot-email">Email Address</label>
                            <input type="email" id="forgot-email" placeholder="you@example.com" className="w-full bg-dark-bg rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                        </div>
                        <div className="flex justify-end">
                             <button type="submit" className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors">
                                Send Reset Link
                            </button>
                        </div>
                     </form>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
