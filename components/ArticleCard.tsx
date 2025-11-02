import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import type { Article } from '@/lib/articles';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.slug}`} className="group">
      <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-slate-100">
        <div className="aspect-video overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-sm text-slate-600 mb-3">
            <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-medium">
              {article.category}
            </span>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{article.readTime}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-slate-600 line-clamp-3 mb-4 leading-relaxed">
            {article.excerpt}
          </p>
          <div className="flex items-center text-slate-900 font-medium group-hover:gap-2 transition-all">
            <span>Lire l'article</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
}
