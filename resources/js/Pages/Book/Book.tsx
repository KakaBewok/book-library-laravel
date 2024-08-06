import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Book } from '@/types/BookType';
import { Head } from '@inertiajs/react';

type props = {
    book: Book
}
export default function Books({ auth, book}: PageProps<props>) {
    const {id, title, author, year, is_published} = book;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"><a href='/book'>Books</a></h2>}
        >
            <Head title="Books" />
                
                         <div className="py-12">
                                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 my-5" key={id}>
                                            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                                                <div className='flex justify-between items-center p-6'>
                                                    <h1 className="text-xl text-gray-900 dark:text-gray-100">{title}</h1>
                                                    {
                                                        is_published ? (
                                                            <div className='py-2 px-4 w-24 bg-blue-900 rounded-md flex justify-center items-center'>
                                                                <p className='text-slate-100'>Published</p>
                                                            </div>
                                                        ) : (
                                                            <div className='py-2 px-4 w-24 bg-red-700 rounded-md flex justify-center items-center'>
                                                                <p className='text-slate-100 text-sm'>Not yet Published</p>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                                
                                                <div className='dark:text-slate-100 text-sm flex flex-col gap-3 bg-slate-700 pl-6 py-5'>
                                                    <p>{author}</p>
                                                    <p>{year}</p>
                                                </div>
                                             </div>
                                    </div>
                        </div>
                
        </AuthenticatedLayout>
    );
}