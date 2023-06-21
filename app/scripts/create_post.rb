# frozen_string_literal: true

require 'time'

POSTS_DIR = 'app/content/posts/'

puts '> Input title:'
title = gets.chomp
puts "\n"
puts '> Input description:'
description = gets.chomp
puts "\n"
puts '> Input tags (separated by commas):'
tags = gets.chomp.split(',').map(&:strip)
puts "\n"

now = Time.now
date = now.strftime('%Y-%m-%dT%H:%M:%S')
file_name = "#{now.strftime('%Y-%m-%d-%H-%M-%S')}.mdx"
file_path = "#{POSTS_DIR}#{file_name}"

File.open(file_path, 'w') do |file|
  file.write("---\n")
  file.write("title: '#{title}'\n")
  file.write("description: '#{description}'\n")
  file.write("date: '#{date}+09:00'\n")
  file.write("tags:\n")
  tags.each { |tag| file.write("  - #{tag}\n") }
  file.write("isPublished: false\n")
  file.write("---\n")
  file.write("\n")
  file.write("\n")
end

puts "✨ Done. New post file path: #{file_path}"
