// File: src/Pages/NotFound.jsx
import { Link, useRouteError, isRouteErrorResponse } from "react-router";
import { Home, ArrowLeft, AlertTriangle, ChevronDown } from "lucide-react";
import { useState } from "react";

const NotFound = () => {
    const error = useRouteError();
    const [showDetails, setShowDetails] = useState(false);

    // React Router gives structured info for routing errors (404, loader throws with a Response)
    const isRouteError = isRouteErrorResponse(error);

    const status = isRouteError ? error.status : null;
    const statusText = isRouteError ? error.statusText : null;

    // For thrown JS errors (bugs, crashed components, failed fetches, etc.)
    const errorMessage = isRouteError
        ? error.data?.message || error.data || statusText
        : error?.message || String(error);

    const errorStack = !isRouteError ? error?.stack : null;

    const is404 = status === 404;

    return (
        <div className="w-full min-h-screen bg-[#16244B] relative overflow-hidden flex items-center justify-center px-6 py-16">
            {/* Ambient glow blobs */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
                {/* Status code or generic error icon */}
                {status ? (
                    <h1 className="text-[120px] md:text-[180px] font-extrabold leading-none bg-linear-to-b from-cyan-300 to-cyan-500 bg-clip-text text-transparent select-none">
                        {status}
                    </h1>
                ) : (
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-2xl bg-red-400/10 border border-red-400/30 flex items-center justify-center">
                            <AlertTriangle className="text-red-400" size={36} />
                        </div>
                    </div>
                )}

                {/* Short title + description */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {is404
                        ? "This Section Is Under Construction"
                        : "This Page Hit a Technical Issue"}
                </h2>
                <p className="text-slate-300 leading-7 max-w-md mx-auto mb-10">
                    {is404
                        ? "This part of the site isn't ready yet. Feel free to explore other pages in the meantime, or contact your developer for an update on when it will be live."
                        : "Something went wrong while loading this page. Please contact your developer with the details below — they'll be able to look into it and get back to you shortly."}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 border border-white/20 hover:border-cyan-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>

                {/* Developer error details — collapsible, always available */}
                <div className="text-left bg-black/30 border border-white/10 rounded-xl overflow-hidden">
                    <button
                        onClick={() => setShowDetails((s) => !s)}
                        className="w-full flex items-center justify-between px-5 py-3 text-slate-300 text-sm font-semibold hover:bg-white/5 transition-colors"
                    >
                        <span>Error Details {status ? `(${status})` : ""}</span>
                        <ChevronDown
                            size={16}
                            className={`transition-transform ${showDetails ? "rotate-180" : ""}`}
                        />
                    </button>

                    {showDetails && (
                        <div className="px-5 pb-5 space-y-3">
                            <div>
                                <p className="text-xs font-semibold text-cyan-400 uppercase mb-1">Message</p>
                                <p className="text-sm text-slate-200 break-words font-mono">
                                    {String(errorMessage)}
                                </p>
                            </div>

                            {statusText && !is404 && (
                                <div>
                                    <p className="text-xs font-semibold text-cyan-400 uppercase mb-1">Status Text</p>
                                    <p className="text-sm text-slate-200 font-mono">{statusText}</p>
                                </div>
                            )}

                            {errorStack && (
                                <div>
                                    <p className="text-xs font-semibold text-cyan-400 uppercase mb-1">Stack Trace</p>
                                    <pre className="text-xs text-slate-400 font-mono whitespace-pre-wrap break-words max-h-64 overflow-y-auto bg-black/40 rounded-lg p-3">
                                        {errorStack}
                                    </pre>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Quick links */}
                <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
                    <Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                        Contact Us
                    </Link>
                    <span className="text-white/10">•</span>
                    <Link to="/blogs" className="text-slate-400 hover:text-cyan-400 transition-colors">
                        Read Our Blog
                    </Link>
                    <span className="text-white/10">•</span>
                    <Link to="/business-setup/uae" className="text-slate-400 hover:text-cyan-400 transition-colors">
                        Explore Our Services
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;