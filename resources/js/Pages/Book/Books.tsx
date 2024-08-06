import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Book } from '@/types/BookType';
import { Head } from '@inertiajs/react';

type props = {
    books: Array<Book>
}
export default function Books({ auth, books}: PageProps<props>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Books</h2>}
        >
            <Head title="Books" />
                {
                    books.length > 0 ? (
                         <div className="py-12">
                                {books.map(book => (
                                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 my-5" key={book.id}>
                                        <a href={`/book/${book.slug}`}>
                                            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg hover:bg-gray-700 transition duration-200">
                                                <div className="p-6 text-gray-900 dark:text-gray-100">{book.title}</div>
                                             </div>
                                        </a>
                                    </div>
                                ))}
                        </div>
                    ) : (
                        (
                         <div className="py-12">
                                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 my-5">
                                            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg hover:bg-gray-700 transition duration-200 flex justify-center">
                                                <div className="p-6 text-gray-900 dark:text-gray-100">No books.</div>
                                             </div>
                                    </div>
                        </div>
                    )
                    )
                }
        </AuthenticatedLayout>
    );
}