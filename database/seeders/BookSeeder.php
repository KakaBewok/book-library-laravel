<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $books = [
            [
                'title' => 'Book 2',
                'author' => 'Siti',
                'slug' => 'book-2',
                'year' => 2023,
                'is_published' => true
            ],
            [
                'title' => 'Book 3',
                'author' => 'Budi',
                'slug' => 'book-3',
                'year' => 2022,
                'is_published' => false
            ],
            [
                'title' => 'Book 4',
                'author' => 'Aisyah',
                'slug' => 'book-4',
                'year' => 2021,
                'is_published' => true
            ],
        ];

        foreach ($books as $bookData) {
            Book::create($bookData);
        }
    }
}
