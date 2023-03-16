require 'time'

POSTS_DIR = 'src/content/posts/'

puts "▶ Input title:"
title = gets.chomp
puts "\n"
puts "▶ Input description:"
description = gets.chomp
puts "\n"

now = Time.now
pub_date = now.strftime("%Y-%m-%dT%H:%M:%S")
file_name = "#{now.strftime("%Y-%m-%d-%H-%M-%S")}.mdx"
file_path = "#{POSTS_DIR}#{file_name}"

File.open(file_path, 'w') do |file|
  file.write("---\n")
  file.write("title: '#{title}'\n")
  file.write("description: '#{description}'\n")
  file.write("pubDate: '#{pub_date}+09:00'\n")
  file.write("draft: true\n")
  file.write("---\n")
end

puts "✨ Done. New post file path: #{file_path}"
