import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-emerald-50 py-12 border-t border-emerald-200">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-lg font-black text-emerald-900 mb-4 uppercase tracking-tighter">TerraLogic Forge</div>
          <p className="text-emerald-700/60 text-sm tracking-wide font-semibold">© 2024 TERRALOGIC AI. PRECISION CULTIVATION.</p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
          {[
            { name: 'Github', href: '#' },
            { name: 'Discord', href: '#' },
            { name: 'Twitter', href: '#' },
            { name: 'Privacy', href: '#' },
          ].map((link) => (
            <Link key={link.name} href={link.href} className="text-emerald-700/60 hover:text-emerald-900 text-sm uppercase font-semibold transition-colors">{link.name}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
